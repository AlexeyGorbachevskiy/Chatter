import React from 'react';
import obj from './Paginator.module.css';


type PaginatorPropsType = {
    pages: Array<number>
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

function Paginator(props: PaginatorPropsType) {


    return (
        <>
            <button className={obj.back_btn}>
                <i className="fa fa-angle-double-left" aria-hidden="true"/>
                &nbsp; Back
            </button>
            <span className={obj.pages_wrapper}>
                        {props.pages.map((pageNumber: number) => <span
                            className={props.currentPage === pageNumber ? `${obj.page} ${obj.current_page_is_active}` : obj.page}
                            key={pageNumber} onClick={() => props.onPageChanged(pageNumber)}>{pageNumber}</span>)}
                        </span>
            <button className={obj.next_btn}> Next &nbsp;
                <i className="fa fa-angle-double-right" aria-hidden="true"/>
            </button>
        </>

    )
}


export default Paginator;