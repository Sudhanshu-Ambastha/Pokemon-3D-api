/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/68.glb -o models/gltfjsx/regular/68.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/68.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <primitive object={nodes.Spine1} />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
        <skinnedMesh geometry={nodes.Machamp_1.geometry} material={materials['Material #101']} skeleton={nodes.Machamp_1.skeleton} />
        <skinnedMesh geometry={nodes.Machamp_2.geometry} material={materials['Material #102']} skeleton={nodes.Machamp_2.skeleton} />
        <skinnedMesh geometry={nodes.Machamp_3.geometry} material={materials['Material #103']} skeleton={nodes.Machamp_3.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/68.glb')
