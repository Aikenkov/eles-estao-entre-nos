import { jest } from "@jest/globals"
import { oddService } from "../src/services/oddService"
import { secretService } from "../src/_secret_/secretService"
import { areaFiftyOneRepository } from "../src/repositories/areaFiftyOneRepository"

describe("Shiiiiii! Is Secret!", ()=>{
  it("Should return something, maybe", ()=>{
    jest.spyOn(secretService, "isOdd").mockImplementationOnce(()=> false)
    const result = oddService.isReallyOdd(2)
    expect(result).toBe("Im not sure...")
  })
  it("Should return or not, who knows?", ()=>{
    jest.spyOn(secretService, "isOdd").mockImplementationOnce(()=> true)
    const result = oddService.isReallyOdd(1)
    expect(result).toBe("maybe not, who knows?")
  })
})

describe("Nothing flying here", ()=>{
  it("Should return a sinal", async ()=>{
    const ovnis = [{
      id: 1,
      relatedBy: 2,
      geoLat: 2.2,
      geoLon: 1.1,
    }]
    jest.spyOn(areaFiftyOneRepository, "listOVNIS").mockImplementationOnce((): any => ovnis)

   const result = await oddService.listOVNIS()

   expect(result).toEqual(ovnis)
  })
})