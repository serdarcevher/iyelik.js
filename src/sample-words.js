const samples = [
    'toprak',
    'su',
    'kabak',
    'renk',
    'hak',
    'hukuk',
    'adalet',
    'kek',
    'vizyon',
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