/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/722.glb -o models/gltfjsx/regular/722.jsx 
Author: JoaquínM (https://sketchfab.com/JoaquinM)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rowlett-fanmade-88a67f04f99046ca9d3335c43cb0a311
Title: Rowlett fanmade
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/722.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials['1001']} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/722.glb')
