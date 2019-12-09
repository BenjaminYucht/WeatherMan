function tempConversion() {
    this.rounded = function (numToRound) {
        return Math.round(numToRound * 100) / 100

    }
    this.convertKelvinToFahr = function (tempInKelv) {
        var tempInFahr = (tempInKelv - 273.15) * 9 / 5 + 32
        return this.rounded(tempInFahr)
    }
}

module.exports = tempConversion;

