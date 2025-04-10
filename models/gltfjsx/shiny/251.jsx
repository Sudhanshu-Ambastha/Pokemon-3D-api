/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/shiny/251.glb -o models/gltfjsx/shiny/251.jsx 
Author: ijackprovostjr (https://sketchfab.com/ijackprovostjr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3ds-pokemon-x-y-251-celebi-shiny-49bf5c0cabb34596902a38b8d0756cbc
Title: 3DS - Pokemon X Y - 251 Celebi shiny
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/251.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh geometry={nodes.Object_6.geometry} material={materials.Material_50} skeleton={nodes.Object_6.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.Material_51} skeleton={nodes.Object_7.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.Material_52} skeleton={nodes.Object_8.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.Material_53} skeleton={nodes.Object_9.skeleton} scale={0.025} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/251.glb')
