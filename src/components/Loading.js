import React from 'react';
import styled from 'styled-components';
import { Spinner } from '@/styled';

const LoadingContainer = styled.div`
  margin: 24px 0;
  text-align: center;
`

export default function({ children }) {
  return (
    <LoadingContainer>
      <Spinner />
      <p>{children}</p>
    </LoadingContainer>  
  )
}
