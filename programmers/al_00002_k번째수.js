/*
	프로그래머스 1단계 K번째 수
    array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수

    1. array의 길이는 1 이상 100 이하입니다.
	2. array의 각 원소는 1 이상 100 이하입니다.
	3. commands의 길이는 1 이상 50 이하입니다.
	4. commands의 각 원소는 길이가 3입니다.
*/
var solution = (a, b) => b.map(i => a.slice(i[0] - 1, i[1]).sort((a,b) => a-b)[i[2] - 1]);
solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);