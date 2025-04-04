/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/y/9.glb -o models/gltfjsx/y/9.jsx 
Author: Juliocesar6328 (https://sketchfab.com/Juliocesar6328)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/blastoise-mega-e32fb5b0edc24bc3ad5b35e20218a960
Title: Blastoise Mega🌊⛲💦💧
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/y/9.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh geometry={nodes.Object_6.geometry} material={materials.Material_99} skeleton={nodes.Object_6.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.Material_101} skeleton={nodes.Object_7.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.Material_100} skeleton={nodes.Object_8.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_10.geometry} material={materials.Material_100} skeleton={nodes.Object_10.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_12.geometry} material={materials.Material_100_1} skeleton={nodes.Object_12.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_14.geometry} material={materials.Material_100_1} skeleton={nodes.Object_14.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_16.geometry} material={materials.Material_100_1} skeleton={nodes.Object_16.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_18.geometry} material={materials.Material_100_1} skeleton={nodes.Object_18.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_20.geometry} material={materials.Material_100_1} skeleton={nodes.Object_20.skeleton} scale={0.025} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/y/9.glb')
