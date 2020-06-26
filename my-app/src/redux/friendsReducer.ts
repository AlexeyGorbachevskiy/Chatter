type initialStateType = typeof initialState


export type PhotosType = {
    small: string
    large: string
}
export type UsersArrayType = {
    id: number
    name: string
    photos: PhotosType
    status: string
    followed: boolean

}

let initialState = {
    // users: [
    //     {
    //         id: 1,
    //         followed: true,
    //         fullName: 'Jeff Bezos',
    //         status: 'Hey, how you doing?',
    //         location: {city: 'Minsk', country: 'Belarus'},
    //         imgName: "Bezos.png",
    //         age: 43,
    //     },
    //     {
    //         id: 2,
    //         followed: true,
    //         fullName: 'Elon Musk',
    //         status: 'Hi all!!!',
    //         location: {city: 'Moscow', country: 'Russia'},
    //         imgName: "Musk.png",
    //         age: 29,
    //     },
    //     {
    //         id: 3,
    //         followed: true,
    //         fullName: 'Jordan Peterson',
    //         status: 'Hey, how are you?',
    //         location: {city: 'Minsk', country: 'Belarus'},
    //         imgName: "Peterson.webp",
    //         age: 28,
    //     },
    //     {
    //         id: 4,
    //         followed: true,
    //         fullName: 'Mark Zuckerberg',
    //         status: 'Hey, how are you?',
    //         location: {city: 'Minsk', country: 'Belarus'},
    //         imgName: "Zuckerberg.png",
    //         age: 36,
    //     },
    //     {
    //         id: 5,
    //         followed: true,
    //         fullName: 'Michael  Jordan',
    //         status: 'Hey, how are you?',
    //         location: {city: 'Minsk', country: 'Belarus'},
    //         imgName: "Jordan.png",
    //         age: 58,
    //     },
    //     ],
    users: <any[]>[],
    newPostText: '',
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

export type FriendsReducerActionTypes =
    FollowACType
    | UnfollowACType
    | SetUsersACTYPE
    | SetCurrentPageACTYPE
    | SetTotalUsersCountACType;
const friendsReducer = (state: initialStateType = initialState, action: FriendsReducerActionTypes): initialStateType => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state, users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default:
            return state
    }
}

export type FollowACType = {
    type: typeof FOLLOW
    userId: number
}
export type UnfollowACType = {
    type: typeof UNFOLLOW
    userId: number
}
export type SetUsersACTYPE = {
    type: typeof SET_USERS
    users: Array<UsersArrayType>
}
export type SetCurrentPageACTYPE = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export type SetTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const followAC = (userId: number): FollowACType => ({type: FOLLOW, userId});
export const unfollowAC = (userId: number): UnfollowACType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UsersArrayType>): SetUsersACTYPE => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage: number): SetCurrentPageACTYPE => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
});

export default friendsReducer;