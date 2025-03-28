/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/894.glb -o models/gltfjsx/regular/894.jsx 
Author: Forsaken AR Official (https://sketchfab.com/FNAF_AR_Official)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mobile-pokemon-home-894-regieleki-fe7296db42e342c891e36931b75b497c
Title: Mobile - Pokemon HOME - 894 Regieleki
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/894.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes._rootJoint} />
      <skinnedMesh geometry={nodes.Object_6.geometry} material={materials.pm0894_00_00_BodyAEnv} skeleton={nodes.Object_6.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.pm0894_00_00_BodyAEnv} skeleton={nodes.Object_7.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_8.geometry} material={materials.pm0894_00_00_BodyCInc} skeleton={nodes.Object_8.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_9.geometry} material={materials.pm0894_00_00_BodyBIncVco} skeleton={nodes.Object_9.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_10.geometry} material={materials.pm0894_00_00_BodyBIncVco} skeleton={nodes.Object_10.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_11.geometry} material={materials.pm0894_00_00_BodyAEnv} skeleton={nodes.Object_11.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_12.geometry} material={materials.pm0894_00_00_BodyDNon} skeleton={nodes.Object_12.skeleton} scale={0.025} />
      <skinnedMesh geometry={nodes.Object_13.geometry} material={materials.pm0894_00_00_BodyENon} skeleton={nodes.Object_13.skeleton} scale={0.025} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/894.glb')
