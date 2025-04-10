/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/shiny/871.glb -o models/gltfjsx/shiny/871.jsx 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/871.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_3.geometry} material={materials.PaletteMaterial001} position={[0, 0, -86.852]} rotation={[-Math.PI, 0, 0]} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/871.glb')
