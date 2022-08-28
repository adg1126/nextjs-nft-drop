import React from 'react';
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';

export default function NFTDropPage() {
  const connectWithMetamask = useMetamask(),
    address = useAddress(),
    disconnectWithMetamask = useDisconnect();

  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
      <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
        <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
          <div className='bg-gradient-to-br from-yellow-400 to-purple-600 p-2 rounded-xl'>
            <img
              className='w-44 rounded-xl object-cover lg:h-96 lg:w-72'
              src='https://links.papareact.com/8sg'
              alt=''
            />
          </div>
          disconnect
          <div className='text-center p-5 space-y-2'>
            <h1 className='text-4xl font-bold text-white'>NEXT APES</h1>
            <h2 className='text-xl text-gray-300'>
              A collection of apes who leave and breathe NEXT!
            </h2>
          </div>
        </div>
      </div>

      <div className='flex flex-1 flex-col  p-12 lg:col-span-6'>
        <header className='flex items-center justify-between'>
          <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>
            The
            <span className='font-extrabold underline decoration-pink-600/50'>
              {' '}
              NEXT APE
            </span>{' '}
            NFT Market Place
          </h1>
          {address ? (
            <button
              onClick={() => disconnectWithMetamask()}
              className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'
            >
              Sign out
            </button>
          ) : (
            <button
              onClick={() => connectWithMetamask()}
              className='rounded-full bg-rose-400 text-white px-4 py-2 text-xs font-bold lg:px-5 lg:py-3 lg:text-base'
            >
              Sign in
            </button>
          )}
        </header>
        <br className='my-2 border' />
        {address && (
          <p className='text-center text-sm text-rose-400'>
            You're logged in with a wallet {address.substring(0, 5)}...
            {address.substring(address.length, -5)}
          </p>
        )}
        <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
          <img
            className='w-80 object-cover pb-10 lg:h-40'
            src='https://links.papareact.com/bdy'
            alt=''
          />
          <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>
            The NEXT APE Coding Club | NFT Drop
          </h1>
          <p className='pt-2 text-xl text-green-500'>13/21 NFT's claimed.</p>
        </div>
        <button className='h-16 w-full rounded-full text-white mt-10 bg-red-600 font-bold'>
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  );
}
