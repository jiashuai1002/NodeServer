class Boy {
    @eng('French')
    speak1() {
        console.log('i can speak  ' + this.language)
        console.log('i can speak')
    }
}



function eng(pLanguage) {
    return function eng(target, key, desc, four) {
        target.language = pLanguage;
        console.log('target----', target)
        console.log('key----', key)
        console.log('desc----', desc)
        console.log('four----', four)
    }
}

const a = new Boy()
a.speak1()