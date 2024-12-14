function convertToOctal() {
    // Input qiymatini olish
    const decimalInput = document.getElementById('decimalInput').value;

    // Agar qiymat kiritilmasa yoki noto'g'ri bo'lsa
    if (decimalInput === "" || isNaN(decimalInput)) {
        document.getElementById('result').textContent = "Iltimos, to'g'ri son kiriting!";
        return;
    }

    // 10-likdan 8-likka o'tkazish
    const octalResult = parseInt(decimalInput, 10).toString(8);

    // Natijani chiqarish
    document.getElementById('result').textContent = `Natija: ${octalResult}`;
}