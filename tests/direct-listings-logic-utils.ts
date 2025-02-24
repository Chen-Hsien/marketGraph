import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BuyerApprovedForListing,
  CancelledListing,
  CurrencyApprovedForListing,
  NewListing,
  NewSale,
  UpdatedListing
} from "../generated/DirectListingsLogic/DirectListingsLogic"

export function createBuyerApprovedForListingEvent(
  listingId: BigInt,
  buyer: Address,
  approved: boolean
): BuyerApprovedForListing {
  let buyerApprovedForListingEvent =
    changetype<BuyerApprovedForListing>(newMockEvent())

  buyerApprovedForListingEvent.parameters = new Array()

  buyerApprovedForListingEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  buyerApprovedForListingEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  buyerApprovedForListingEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return buyerApprovedForListingEvent
}

export function createCancelledListingEvent(
  listingCreator: Address,
  listingId: BigInt
): CancelledListing {
  let cancelledListingEvent = changetype<CancelledListing>(newMockEvent())

  cancelledListingEvent.parameters = new Array()

  cancelledListingEvent.parameters.push(
    new ethereum.EventParam(
      "listingCreator",
      ethereum.Value.fromAddress(listingCreator)
    )
  )
  cancelledListingEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )

  return cancelledListingEvent
}

export function createCurrencyApprovedForListingEvent(
  listingId: BigInt,
  currency: Address,
  pricePerToken: BigInt
): CurrencyApprovedForListing {
  let currencyApprovedForListingEvent =
    changetype<CurrencyApprovedForListing>(newMockEvent())

  currencyApprovedForListingEvent.parameters = new Array()

  currencyApprovedForListingEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  currencyApprovedForListingEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  currencyApprovedForListingEvent.parameters.push(
    new ethereum.EventParam(
      "pricePerToken",
      ethereum.Value.fromUnsignedBigInt(pricePerToken)
    )
  )

  return currencyApprovedForListingEvent
}

export function createNewListingEvent(
  listingCreator: Address,
  listingId: BigInt,
  assetContract: Address,
  listing: ethereum.Tuple
): NewListing {
  let newListingEvent = changetype<NewListing>(newMockEvent())

  newListingEvent.parameters = new Array()

  newListingEvent.parameters.push(
    new ethereum.EventParam(
      "listingCreator",
      ethereum.Value.fromAddress(listingCreator)
    )
  )
  newListingEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  newListingEvent.parameters.push(
    new ethereum.EventParam(
      "assetContract",
      ethereum.Value.fromAddress(assetContract)
    )
  )
  newListingEvent.parameters.push(
    new ethereum.EventParam("listing", ethereum.Value.fromTuple(listing))
  )

  return newListingEvent
}

export function createNewSaleEvent(
  listingCreator: Address,
  listingId: BigInt,
  assetContract: Address,
  tokenId: BigInt,
  buyer: Address,
  quantityBought: BigInt,
  totalPricePaid: BigInt
): NewSale {
  let newSaleEvent = changetype<NewSale>(newMockEvent())

  newSaleEvent.parameters = new Array()

  newSaleEvent.parameters.push(
    new ethereum.EventParam(
      "listingCreator",
      ethereum.Value.fromAddress(listingCreator)
    )
  )
  newSaleEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  newSaleEvent.parameters.push(
    new ethereum.EventParam(
      "assetContract",
      ethereum.Value.fromAddress(assetContract)
    )
  )
  newSaleEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  newSaleEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  newSaleEvent.parameters.push(
    new ethereum.EventParam(
      "quantityBought",
      ethereum.Value.fromUnsignedBigInt(quantityBought)
    )
  )
  newSaleEvent.parameters.push(
    new ethereum.EventParam(
      "totalPricePaid",
      ethereum.Value.fromUnsignedBigInt(totalPricePaid)
    )
  )

  return newSaleEvent
}

export function createUpdatedListingEvent(
  listingCreator: Address,
  listingId: BigInt,
  assetContract: Address,
  listing: ethereum.Tuple
): UpdatedListing {
  let updatedListingEvent = changetype<UpdatedListing>(newMockEvent())

  updatedListingEvent.parameters = new Array()

  updatedListingEvent.parameters.push(
    new ethereum.EventParam(
      "listingCreator",
      ethereum.Value.fromAddress(listingCreator)
    )
  )
  updatedListingEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  updatedListingEvent.parameters.push(
    new ethereum.EventParam(
      "assetContract",
      ethereum.Value.fromAddress(assetContract)
    )
  )
  updatedListingEvent.parameters.push(
    new ethereum.EventParam("listing", ethereum.Value.fromTuple(listing))
  )

  return updatedListingEvent
}
