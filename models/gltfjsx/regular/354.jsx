/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/354.glb -o models/gltfjsx/regular/354.jsx 
Author: nguyenlouis32 (https://sketchfab.com/nguyenlouis32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/banette-63189a12fa124202b31a62f003db8166
Title: Banette
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/354.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.assets_textures_pm0354_00_Body1_png} rotation={[Math.PI / 2, 0, 0.001]} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.assets_textures_pm0354_00_Eye1_png} rotation={[Math.PI / 2, 0, 0.001]} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/354.glb')
