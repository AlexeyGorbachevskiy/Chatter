import React from 'react';
import obj from './ProfileInfo.module.css';
import avatar from '../../img/avatar.png';


function ProfileInfo() {
    return (
            <div className={obj.data_wrapper}>
                <div className={obj.ava_wrapper}>
                    {/*<img className={obj.ava} src={avatar} width={"100px"} height={"100px"}/>*/}
                    <img className={obj.ava} src={require('../../../img/avatar.png')} alt="Avatar"/>
                </div>
                <div className={obj.data}>
                    <div className={obj.data_header}>
                        <h2>Alexey Gorbachevskiy</h2>
                    </div>
                    <div className={obj.data_items}>
                        <div className={obj.date}>
                            <p>Date of birth: September 25, 1996</p>
                        </div>
                        <div className={obj.city}>
                            <p>City: Minsk</p>
                        </div>
                        <div className={obj.education}>
                            <p>Education: BSUIR</p>
                        </div>
                        <div className={obj.marital_status}>
                            <p>Marital status: single</p>
                        </div>
                    </div>
                </div>
            </div>
    );
}


export default ProfileInfo;