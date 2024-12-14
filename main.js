function convertToBinary() {
    // Input qiymatini olish
    const decimalInput = document.getElementById('decimalInput').value;

    // Agar qiymat kiritilmasa yoki noto'g'ri bo'lsa
    if (decimalInput === "" || isNaN(decimalInput)) {
        document.getElementById('result').textContent = "Iltimos, to'g'ri son kiriting!";
        return;
    }

    // 10-likdan 2-likka o'tkazish
    const binaryResult = parseInt(decimalInput, 10).toString(2);

    // Natijani chiqarish
    document.getElementById('result').textContent = `Natija: ${binaryResult}`;
}