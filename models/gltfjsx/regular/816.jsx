/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/816.glb -o models/gltfjsx/regular/816.jsx 
Author: Miaru3d (https://sketchfab.com/miaru3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sobble-pokemon-sword-and-shield-01ef00fb83d7457b93f93f0e82882182
Title: Sobble - Pokemon Sword and Shield
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/816.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Aguita_Agua_0.geometry} material={materials.Agua} position={[0, 5.458, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={100} />
      <mesh geometry={nodes.Sobble_Soble_Main_0.geometry} material={materials.Soble_Main} position={[0, 5.458, 0]} rotation={[-Math.PI / 2, 0, 0.003]} scale={100} />
      <mesh geometry={nodes.Sobble_Sobble_Face_0.geometry} material={materials.Sobble_Face} position={[0, 5.458, 0]} rotation={[-Math.PI / 2, 0, 0.003]} scale={100} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/816.glb')
