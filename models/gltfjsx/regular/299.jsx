/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/299.glb -o models/gltfjsx/regular/299.jsx 
Author: nguyenlouis32 (https://sketchfab.com/nguyenlouis32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nosepass-c08ad231be09475086c6ec495de31afe
Title: Nosepass
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/299.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_3.geometry} material={materials.body_mat} />
      <mesh geometry={nodes.Object_4.geometry} material={materials.eye_mat} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/299.glb')
