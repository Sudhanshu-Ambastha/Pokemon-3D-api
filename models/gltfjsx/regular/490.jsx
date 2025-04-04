/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/490.glb -o models/gltfjsx/regular/490.jsx 
Author: seth the yutyrannus (https://sketchfab.com/slang107123456789)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pokemon-x-y-manaphy-8f109dec61c649e39475d605405219b8
Title: pokemon x y manaphy
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/490.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh geometry={nodes.Object_56.geometry} material={materials.Body} skeleton={nodes.Object_56.skeleton} scale={0.081} />
      <skinnedMesh geometry={nodes.Object_58.geometry} material={materials.material} skeleton={nodes.Object_58.skeleton} scale={0.081} />
      <skinnedMesh geometry={nodes.Object_60.geometry} material={materials['Mouth.002']} skeleton={nodes.Object_60.skeleton} scale={0.081} />
      <skinnedMesh geometry={nodes.Object_62.geometry} material={materials['Mouth.002']} skeleton={nodes.Object_62.skeleton} scale={0.081} />
      <skinnedMesh geometry={nodes.Object_68.geometry} material={materials['Mouth.002']} skeleton={nodes.Object_68.skeleton} scale={0.081} />
      <skinnedMesh geometry={nodes.Object_70.geometry} material={materials['Mouth.002']} skeleton={nodes.Object_70.skeleton} scale={0.081} />
      <skinnedMesh geometry={nodes.Object_72.geometry} material={materials['Mouth.002']} skeleton={nodes.Object_72.skeleton} scale={0.081} />
      <skinnedMesh geometry={nodes.Object_64.geometry} material={materials.Mouth} skeleton={nodes.Object_64.skeleton} scale={0.081} />
      <skinnedMesh geometry={nodes.Object_66.geometry} material={materials.Body} skeleton={nodes.Object_66.skeleton} scale={0.081} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/490.glb')
