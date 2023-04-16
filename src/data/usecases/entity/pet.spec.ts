import { Pet } from './pet'
const makeSut = (name: string,breed: string): { sut: Pet} => {
    	return { sut: new Pet(name,breed) }
    }
describe('Pet class', () => { 
    describe('cry method', () => { 

      	const name = 'any_name'
	const breed = 'any_breed'
	const sound = 'any_sound'
  
      	test('ensure cry method returns a cavapoo related value if breed is cavapoo', async () => {
        const { sut } = makeSut(name,'cavapoo')
        let result = sut.cry(sound)
        expect(result).toBe(`${name}says:${sound}!`)
        })


 
 ,	test('ensure cry method does not return a cavapoo related value if breed is not cavapoo', async () => {
        const { sut } = makeSut(name,breed)
        let result = sut.cry(sound)
        expect(result).toBe(`${name}says:${sound}raaar!`)
        })

 }) 
    describe('intro method', () => { 

      	const name = 'any_name'
	const breed = 'any_breed'
	const sound = 'any_sound'
  
      	test('ensure intro method returns a cavapoo related value if breed value is cavapoo', async () => {
          const { sut } = makeSut(name,'cavapoo')
          let result = sut.intro(sound)
          expect(result).toBe(`${name}says:${sound}!`)
          })


 
 ,	test('ensure intro method returns a canine related value if breed value is canine', async () => {
          const { sut } = makeSut(name,'canine')
          let result = sut.intro(sound)
          expect(result).toBe(`${name}says:${sound}!`)
          })


 ,	test('ensure intro method returns a poodles related value if breed value is poodles', async () => {
          const { sut } = makeSut(name,'poodles')
          let result = sut.intro(sound)
          expect(result).toBe(`${name}says:${sound}!`)
          })


 ,	test('ensure intro method returns a bulldogs related value if breed value is bulldogs', async () => {
          const { sut } = makeSut(name,'bulldogs')
          let result = sut.intro(sound)
          expect(result).toBe(`${name}says:${sound}!`)
          })


 ,	test('ensure intro method returns a default related value if breed value is '+`${breed}`, async () => {
        const { sut } = makeSut(name,'dummyrandomvalue')
        let result = sut.intro(sound)
        expect(result).toBe(`${name}says:${sound}defaultsound!`)
        })

 }) 

 }) 

