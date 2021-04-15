const chai = window.chai
const expect = chai.expect
mocha.setup({ignoreLeaks: true})

describe ('validateCode', () => {
    it('should return true if code is valid and false if not valid', () => {
        expect(validateCode("QTW43", ["darn","rats","ugh","egg","fuzzy","kthx","haha", "cheese"], ["QTW41", "QTW42"])).to.equal(true),
        expect(validateCode("K42THX", ["darn","rats","ugh","egg","fuzzy","kthx","haha", "cheese"], ["QTW41", "QTW42"])).to.equal(false)
    })
})