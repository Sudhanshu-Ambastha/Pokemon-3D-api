import React from 'react';
import * as models from '../../models';

export const pokeModelComponents = models;

export function ModelRenderer({ modelName, modelProps }) {
  const Component = pokeModelComponents[modelName];
  if (!Component) {
    return <div>Model not found: {modelName}</div>;
  }
  return <Component {...modelProps} />;
}