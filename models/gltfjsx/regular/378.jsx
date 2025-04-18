/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/378.glb -o models/gltfjsx/regular/378.jsx 
Author: Jonathon.Lai (https://sketchfab.com/Jonathon.Lai)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/regice-378-593cad4603314d1cb081db3faff0589d
Title: Regice #378
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/378.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Body_Unwrap_Texture_Checker_Material_0.geometry} material={materials.Unwrap_Texture_Checker_Material} position={[0.151, -3.262, -7.614]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={1.377} />
      <mesh geometry={nodes.eye_mat_1_0.geometry} material={materials.mat_1} position={[0.151, -3.262, -7.614]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={1.377} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/378.glb')
