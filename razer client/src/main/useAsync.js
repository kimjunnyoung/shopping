import { useReducer, useEffect } from 'react';

// 초기 상태 정의: 로딩 중인지 여부, 데이터, 에러 상태를 포함
const initialState = {
    loading: false, // 로딩 중인지 여부를 나타내는 플래그
    data: null, // 성공적으로 받아온 데이터
    error: null // 에러 정보
};

// 리듀서 함수: 액션에 따라 상태를 업데이트
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            return state;
    }
}

// 커스텀 훅 useAsync 정의
function useAsync(callback, deps = []) {
    // useReducer 훅을 사용하여 상태와 디스패치 함수를 가져옴
    const [state, dispatch] = useReducer(reducer, initialState);

    // 비동기 작업을 실행하는 함수 fetchDate 정의
    const fetchData = async () => {
        dispatch({ type: 'LOADING' }); // 로딩 상태로 변경

        try {
            const data = await callback(); // 비동기 작업 수행
            dispatch({
                type: 'SUCCESS',
                data: data // 데이터 성공적으로 받아오면 SUCCESS 액션 디스패치
            });
        } catch (error) {
            dispatch({
                type: 'ERROR',
                error: error // 작업 중 에러가 발생하면 ERROR 액션 디스패치
            });
        }
    };

    // useEffect 훅을 사용하여 deps 배열의 값이 변경될 때마다 fetchData 함수 호출
    useEffect(() => {
        fetchData();
    }, deps);

    // 상태 값과 fetchData 함수를 반환
    return [state];
}

export default useAsync;
