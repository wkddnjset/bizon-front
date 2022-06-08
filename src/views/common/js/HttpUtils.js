import * as ApiUrl from '../../context/BackEndProtocol';
import { default as MenuUrl } from '../../context/url'; 
import { Cookies } from "react-cookie";
import { useJwt, isExpired, decodeToken } from "react-jwt";

/**
 * Refresh Token 기준으로 access Token 발급여부 체크
 */
function checkJwtToken() {

    const cookies = new Cookies();
    const refreshToken = cookies.get('rToken');
    const accessToken = cookies.get('aToken');

    if(accessToken && refreshToken) {
        
        if(isExpired(accessToken) === false) {
            return true;
        }
        else 
        {
            // AccessToken 이 만료되었다면 refresh Token 검증 절차 진행
            // refresh Token 이 만료 안되었다면 새로운 access token 발급 절차 진행
            // refresh Token 이 만료 되었다면 프로세스 진행 안됨
            if(isExpired(refreshToken) === false) {
                // 신규 access token 발급 요청
                fetch(ApiUrl.COMMON_TOKENREFRESH, {
                    method: "GET",
                    headers: {
                        'accessToken': accessToken,
                        'refreshToken': refreshToken
                    }
                }).then(function(response) {
                    return response.json();
                });
            }
            else 
            {
                alert('잘못된 요청입니다');
                return false;
            }
        }
    }
    else {
        alert('token 정보가 존재하지 않습니다');
        return false;
    }
}



export async function callNonAuthGetMethod(url) {
    
    let response = await fetch(url);
    if(!response.ok) {
    throw new Error('HTTP error! status : ' + response.status);
    }

    return await response.json();
}

export async function callNonAuthPostMethod(url, jsonData) {

    let response = await fetch(url, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(jsonData)
                        }).catch((e) => {
                            throw e;
                        });
    if(!response.ok) {
        throw new Error('HTTP error! status : ' + response.status);
    }
    
    return await response.json();
}

export async function callAuthGetMethod(url) {

    if(checkJwtToken()) {

        let response = await fetch(url);
        if(!response.ok) {
            throw new Error('HTTP error! status : ' + response.status);
        }
        
        return await response.json();
    }
    else {
        // 로그인 화면으로 이동
        window.location.replace(MenuUrl.ADMIN_MAIN);
    }

}

export async function callAuthPostMethod(url, jsonData) {

    if(checkJwtToken()) {

        const cookies = new Cookies();
        const refreshToken = cookies.get('rToken');
        const accessToken = cookies.get('aToken');

        let response = await fetch(url, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": "Bearer " + accessToken
                                },
                                credentials : "include",
                                body: JSON.stringify(jsonData)
                            });
        if(!response.ok) {
            throw new Error('HTTP error! status : ' + response.status);
        }
        
        return await response.json();
    }
    else {
        // 로그인 화면으로 이동
        window.location.replace(MenuUrl.ADMIN_MAIN);
    }
}

export async function callAuthFormPostMethod(url, formData) {

    if(checkJwtToken()) {

        const cookies = new Cookies();
        const refreshToken = cookies.get('rToken');
        const accessToken = cookies.get('aToken');

        let response = await fetch(url, {
                                method: "POST",
                                headers: {
                                    "Authorization": "Bearer " + accessToken
                                },
                                credentials : "include",
                                body: formData
                            });
        if(!response.ok) {
            throw new Error('HTTP error! status : ' + response.status);
        }
        
        return await response.json();
    }
    else {
        // 로그인 화면으로 이동
        window.location.replace(MenuUrl.ADMIN_MAIN);
    }
}

export async function callAutFileDownPostMethod(url, jsonData) {

    if(checkJwtToken()) {

        const cookies = new Cookies();
        const refreshToken = cookies.get('rToken');
        const accessToken = cookies.get('aToken');

        let response = await fetch(url, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": "Bearer " + accessToken
                                },
                                credentials : "include",
                                body: JSON.stringify(jsonData)
                            });
        if(!response.ok) {
            throw new Error('HTTP error! status : ' + response.status);
        }
        
        return await response.blob();
    }
    else {
        // 로그인 화면으로 이동
        window.location.replace(MenuUrl.ADMIN_MAIN);
    }
}