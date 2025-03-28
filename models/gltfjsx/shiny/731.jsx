/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/shiny/731.glb -o models/gltfjsx/shiny/731.jsx 
Author: LunaEagle (https://sketchfab.com/LunaEagle)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pikipek-shiny-7291e07960364280945a4a9675a95984
Title: Pikipek Shiny
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/731.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh geometry={nodes.Object_6.geometry} material={materials.VisualMaterial0} skeleton={nodes.Object_6.skeleton} scale={0.01} />
      <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.VisualMaterial0} skeleton={nodes.Object_8.skeleton} scale={0.01} />
      <skinnedMesh geometry={nodes.Object_10.geometry} material={materials.VisualMaterial0} skeleton={nodes.Object_10.skeleton} scale={0.01} />
      <skinnedMesh geometry={nodes.Object_12.geometry} material={materials.VisualMaterial0} skeleton={nodes.Object_12.skeleton} scale={0.01} />
      <skinnedMesh geometry={nodes.Object_14.geometry} material={materials.VisualMaterial40} skeleton={nodes.Object_14.skeleton} scale={0.01} />
      <skinnedMesh geometry={nodes.Object_16.geometry} material={materials.VisualMaterial0} skeleton={nodes.Object_16.skeleton} scale={0.01} />
      <skinnedMesh geometry={nodes.Object_18.geometry} material={materials.VisualMaterial0} skeleton={nodes.Object_18.skeleton} scale={0.01} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/731.glb')
