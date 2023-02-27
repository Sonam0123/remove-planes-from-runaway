const Runway = require('./Runway')

describe('Runway class', () => {
    const runway = new Runway('way 1')

    test('max plane capacity in the runway is 100', () => {
        expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100)
    })

    test('Runway class can be initialized with a name', () => {
        expect(runway.name).toBe('way 1')
    })

    test('can add planes to runway', () => {
        runway.add('plane 1')
        expect(Runway.planes).toContain('plane 1')
    })

    test('runway is at full capacity', () => {
        for(let i = 2; i < 101; i++) {
            runway.add(`plane ${i}`)
        }
        runway.add('plane 101')

        expect(() => runway.add('plane 101')).toThrow('runways at full capacity!')
    })

    test('can remove planes from runway', () => {
        runway.remove('plane 1')
        expect(Runway.planes).not.toContain('plane 1')
    })

    test('runway is empty', () => {
        for(let i = 2; i < 101; i++) {
            runway.remove(`plane ${i}`)
        }
        runway.remove('plane 101')
        console.log(Runway.planes)
        expect(() => runway.remove('plane 101')).toThrow('no planes in the runway!')
    })

})