/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/shiny/700.glb -o models/gltfjsx/shiny/700.jsx 
Author: Niamorro (https://sketchfab.com/Niamorro)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shiny-sylveon-473accec3d50410cb9ca202db8a03b99
Title: Shiny sylveon
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/700.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.Material__10} skeleton={nodes.Object_7.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.Material__11} skeleton={nodes.Object_8.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.Material__12} skeleton={nodes.Object_9.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_10.geometry} material={materials.Material__13} skeleton={nodes.Object_10.skeleton} scale={0.025} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/700.glb')
