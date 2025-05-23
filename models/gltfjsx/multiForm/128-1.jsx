/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/multiform/128-1.glb -o models/gltfjsx/multiform/128-1.jsx 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/multiForm/128-1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pm0128_13_51_body_mesh_shape_body_a_00.geometry} material={materials['body_a_00.006']} position={[0.009, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.pm0128_13_51_eye_mesh_shape_l_eye.geometry} material={materials['l_eye.006']} position={[0.009, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.pm0128_13_51_fur_mesh_shape_body_b.geometry} material={materials['body_b.006']} position={[0.009, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/multiForm/128-1.glb')
