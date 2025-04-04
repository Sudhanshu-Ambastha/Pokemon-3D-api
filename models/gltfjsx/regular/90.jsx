/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/90.glb -o models/gltfjsx/regular/90.jsx 
Author: nguyenlouis32 (https://sketchfab.com/nguyenlouis32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shellder-807f309936ed4f6988bf169175f2f83c
Title: Shellder
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/90.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.BodySpc_mat_002} rotation={[-0.001, 0, 0]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Eye_mat_002} rotation={[-0.001, 0, 0]} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/90.glb')
