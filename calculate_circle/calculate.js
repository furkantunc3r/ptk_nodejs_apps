const calculate = (radius) => {
    return 3.14 * (radius * radius);
};

if (process.argv[2]) {
    console.log(`Yariçapi (${ process.argv[2] }) olan dairenin alani: (${ calculate(process.argv[2]) }) `);
} else {
    console.log(`Eksik input. Lütfen yariçap giriniz`);
}