import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

type BestProducersContextData = {
  bestProducers: boolean
  setBestProducers: Dispatch<SetStateAction<boolean>>
}



export const BestProducersContext = createContext({} as BestProducersContextData)

export type BestProducerProviderProps = {
  children: React.ReactNode
}

export const BestProducersProvider = ({ children }: BestProducerProviderProps) => {
  const [bestProducers, setBestProducers] = useState<boolean>(false)

  return (
    <BestProducersContext.Provider
      value={{
        bestProducers,
        setBestProducers
      }}
    >
      {children}
    </BestProducersContext.Provider>
  )
}
