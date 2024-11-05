document.getElementById('sendButton').addEventListener('click', function() {
    const letter = document.getElementById('letter').value;
    if (letter.trim() === '') {
        alert('Пожалуйста, напишите ваше письмо.');
        return;
    }

    const response = document.getElementById('response');
    response.textContent = 'Ваше письмо отправлено Деду Морозу!';
    response.classList.remove('hidden');
});