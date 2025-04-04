/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/611.glb -o models/gltfjsx/regular/611.jsx 
Author: nguyenlouis32 (https://sketchfab.com/nguyenlouis32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/fraxure-1192a9105a344f3db034937b8cf8ba0d
Title: Fraxure
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/611.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.OnondBodyNl} rotation={[-Math.PI, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.OnondEyeNl} rotation={[-Math.PI, Math.PI / 2, 0]} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/611.glb')
