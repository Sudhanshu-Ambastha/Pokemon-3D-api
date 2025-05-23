/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/27.glb -o models/gltfjsx/regular/27.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/27.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Feeler} />
      <primitive object={nodes.Hips} />
      <primitive object={nodes.Spine} />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
        <skinnedMesh geometry={nodes.Sandshrew_1.geometry} material={materials['Material #35']} skeleton={nodes.Sandshrew_1.skeleton} />
        <skinnedMesh geometry={nodes.Sandshrew_2.geometry} material={materials['Material #36']} skeleton={nodes.Sandshrew_2.skeleton} />
      </group>
      <skinnedMesh geometry={nodes.Sandshrew_Roll.geometry} material={materials['Material #47']} skeleton={nodes.Sandshrew_Roll.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={2.54} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/27.glb')
