const phrases = [" kickkick"," fikee"]; // 텍스트 배열
const delay = 150; // 글자가 나타나는 간격 (밀리초)
const typingTextElement = document.getElementById("typingText");

let phraseIndex = 0;
let index = 0;
let isDeleting = false;

function typeText() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = typingTextElement.textContent;

    if (!isDeleting && index < currentPhrase.length) {
        typingTextElement.textContent += currentPhrase.charAt(index);
        index++;
        setTimeout(typeText, delay);
    } else if (isDeleting && index >= 0) {
        typingTextElement.textContent = currentText.substring(0, index);
        index--;
        setTimeout(typeText, delay / 2); // 삭제 속도를 타이핑 속도의 절반으로 설정
    } else if (!isDeleting && index === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeText, delay / 2); // 다 쓴 텍스트를 유지하는 시간 설정
    } else {
        isDeleting = false;
        index = 0;
        phraseIndex = (phraseIndex + 1) % phrases.length; // 다음 텍스트로 넘어감
        setTimeout(typeText, delay); // 새로운 타이핑 시작 전 딜레이 설정
    }
}

typeText();
