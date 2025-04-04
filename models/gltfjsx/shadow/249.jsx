/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/shadow/249.glb -o models/gltfjsx/shadow/249.jsx 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shadow/249.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Joint_63_Object_0_SINGLE.geometry} material={materials['Joint_63_Object_0_Material_0.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Joint_63_Object_1_SINGLE.geometry} material={materials['Joint_63_Object_1_Material_1.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Joint_63_Object_2_SINGLE.geometry} material={materials['Joint_63_Object_2_Material_2.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Joint_63_Object_3_SINGLE.geometry} material={materials['Joint_63_Object_3_Material_3.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Joint_63_Object_4_SINGLE.geometry} material={materials['Joint_63_Object_4_Material_4.001']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shadow/249.glb')
