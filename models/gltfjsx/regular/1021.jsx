/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/1021.glb -o models/gltfjsx/regular/1021.jsx 
Author: perkinsonjen (https://sketchfab.com/perkinsonjen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/nintendo-switch-pokemon-raging-bolt-91b976199bad4d29860cd52b043d9d66
Title: Nintendo Switch - Pokemon - Raging Bolt
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/1021.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh geometry={nodes.Object_123.geometry} material={materials.body_b_01} skeleton={nodes.Object_123.skeleton} />
      <skinnedMesh geometry={nodes.Object_125.geometry} material={materials.body_b_01} skeleton={nodes.Object_125.skeleton} />
      <skinnedMesh geometry={nodes.Object_127.geometry} material={materials.body_b_01} skeleton={nodes.Object_127.skeleton} />
      <skinnedMesh geometry={nodes.Object_128.geometry} material={materials.body_a_01} skeleton={nodes.Object_128.skeleton} />
      <skinnedMesh geometry={nodes.Object_129.geometry} material={materials.body_a_01} skeleton={nodes.Object_129.skeleton} />
      <skinnedMesh geometry={nodes.Object_130.geometry} material={materials.body_b_01} skeleton={nodes.Object_130.skeleton} />
      <skinnedMesh geometry={nodes.Object_132.geometry} material={materials.r_eye} skeleton={nodes.Object_132.skeleton} />
      <skinnedMesh geometry={nodes.Object_133.geometry} material={materials.r_eye} skeleton={nodes.Object_133.skeleton} />
      <skinnedMesh geometry={nodes.Object_135.geometry} material={materials.body_b_01} skeleton={nodes.Object_135.skeleton} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/1021.glb')
