/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/mega/302.glb -o models/gltfjsx/mega/302.jsx 
Author: Gallery_of_anon (https://sketchfab.com/Gallery_of_anon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mega-sableye-38cf093e4b694a9aa6747c0cc47ff7a8
Title: Mega Sableye
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/mega/302.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[-0.261, 1.626, 0]} rotation={[0, 0, -0.369]} scale={0.318} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/mega/302.glb')
