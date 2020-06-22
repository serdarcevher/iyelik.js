const samples = [
    'hikaye',
    'toprak',
    'bisiklet',
    'bilgisayar',
    'kabak',
    'renk',
    'semizotu',
    'koltuk',
    'hak',
    'hukuk',
    'adalet',
    'kelam',
    'kek',
    'televizyon',
    'kulaklık'
];

exports.getRandomWord = () => {
    return samples[Math.floor(Math.random() * samples.length)];
}

exports.populate = () => {
    let buttons = '';
    samples.forEach(sample => {
        buttons+= "<button class=\"sample-button\">" + sample + "</button>";
    })
    document.getElementById('samples').innerHTML = buttons; 
}

exports.samples = samples;