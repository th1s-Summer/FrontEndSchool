let lotto = []

for (let i = 0; i < 6; i++) {

    let lottoNum = Math.floor(Math.random() * 45) + 1;

    for (let j = 0; j< lotto.length; j++) {
        if(lottoNum == lotto[j]){
            lottoNum = Math.floor(Math.random() * 45) + 1;
        }
    }
    lotto.push(lottoNum)
}
lotto.sort(function(a, b){
    return a - b;
})
alert('금주의 로또 번호는!!!!');
alert(lotto);
// 
// 
// 
// 
// 
// 
// 
function randomNum(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

function tryLotto(...input) {
    if (input.length !== 6) {
    console.log('숫자를 6개 입력해야 합니다.');
    return;
    } else if (input.length !== new Set(input).size) {
    console.log('숫자를 중복되지 않게 입력해야 합니다.');
    return;
    } else if (input.some(v => !Number.isInteger(v) || v > 45 || v < 1)) {
    console.log('1부터 45까지 숫자 중 하나를 입력해야 합니다.');
    return;
    }
    const selected = [];
    let count = 0;
    while (count < 7) {
        const selectedNum = randomNum(1, 46);
        if (!selected.includes(selectedNum)) {
            count++;
            selected.push(selectedNum);
        }
    }
    console.log(`당첨번호: ${selected.slice(0, 6).join(' ')} | 보너스: ${selected[6]}`);
    const nums = input.filter(v => selected.slice(0, 6).includes(v));
    switch (nums.length) {
        case 0: case 1: case 2:
            console.log('꽝!');
            break;
        case 3:
            console.log('★ 5등 당첨! ★');
            break;
        case 4:
            console.log('★★ 4등 당첨! ★★');
            break;
        case 5:
            if (input.includes(selected[6])) {
                console.log('★★★★ 2등 당첨!! ★★★★');
                nums.push(`보너스 ${selected[6]}`);
            } else console.log('★★★ 3등 당첨!! ★★★');
            break;
        case 6:
            console.log('★★★★★ 1등 당첨!!! ★★★★★');
    }
    if (nums.length > 0) console.log(`내가 맞춘 번호: ${nums.join(' ')}`);
}