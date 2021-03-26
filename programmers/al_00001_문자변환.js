/*
    프로그래머스 3단계 문자변환
    begin에서 target으로 변환하는 가장 짧은 변환 과정

    1. 한번에 한 개의 알파벳만 바꿀 수 있습니다.
    2. words에 있는 단어로만 변환할 수 있습니다.
    3. 각 단어는 알파벳 소문자로만 이루어져 있습니다.
    4. 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
    5. words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
    6. begin과 target은 같지 않습니다.
    7. 변환할 수 없는 경우에는 0를 return 합니다.
*/

var var_begin  = "hit",
    var_target = "cog",
    var_words  = ["lot", "dot", "hot", "dog", "log", "cog"];

function solution(begin, target, words) {
    var answers = [];

    let dfs = ((str, arr, sum) => {
        let list   = words.slice();
        let ex_arr = arr.slice();

        if(str == target) {
            answers.push(sum);
        } else {
            words.forEach((word_str, word_idx) => {
                let check_str = list.shift();
                let test = str;
                let test2 = fn_check_str(str, check_str);

                console.log(test, test2, arr);

                if(fn_check_str(str, check_str) && ! ex_arr.includes(check_str)) {
                    ex_arr.push(check_str);
                    dfs(check_str, ex_arr, sum + 1);
                }
            });
        }

        return;
    });

    dfs(begin, [begin], 0);

    return answers;
}

function fn_check_str(str, check_str) {
    let str_len = [...check_str],
        count = 0;

    str_len.forEach((char, char_idx) => {
        if(str[char_idx] == char) {
            count++;
        }
    });

    return count == str.length - 1;
}

console.log(solution(var_begin, var_target, var_words));