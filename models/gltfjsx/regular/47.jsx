/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/47.glb -o models/gltfjsx/regular/47.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/47.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes['003_Waist']} />
      <group scale={2.54}>
        <skinnedMesh geometry={nodes.Parasect_1.geometry} material={materials.BodyASpc00} skeleton={nodes.Parasect_1.skeleton} />
        <skinnedMesh geometry={nodes.Parasect_2.geometry} material={materials.BodyB} skeleton={nodes.Parasect_2.skeleton} />
        <skinnedMesh geometry={nodes.Parasect_3.geometry} material={materials.BodyASpc00} skeleton={nodes.Parasect_3.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/47.glb')
