import React from 'react'
import MDSpinner from 'react-md-spinner'

export interface Props {
  size?: number
  isLoading: boolean
}

export const OverlayLoadingSpinner: React.FC<Props> = ({
  size = 100,
  isLoading
}) => {
  if (isLoading === false) {
    return <></>
  }

  return (
    <>
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.2)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: 'auto',
          zIndex: 9998
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 'calc(50% - 25px)',
          left: 'calc(50% - 25px)',
          zIndex: 9999
        }}
      >
        <MDSpinner size={size} />
      </div>
    </>
  )
}
