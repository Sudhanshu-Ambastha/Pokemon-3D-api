/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/707.glb -o models/gltfjsx/regular/707.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/707.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Waist} />
      <skinnedMesh geometry={nodes.Klefki.geometry} material={materials['Material #21']} skeleton={nodes.Klefki.skeleton} rotation={[-Math.PI / 2, 0, 0]} scale={2.54} />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
        <skinnedMesh geometry={nodes.KlefkiA_1.geometry} material={materials['Material #21']} skeleton={nodes.KlefkiA_1.skeleton} />
        <skinnedMesh geometry={nodes.KlefkiA_2.geometry} material={materials['Material #22']} skeleton={nodes.KlefkiA_2.skeleton} />
        <skinnedMesh geometry={nodes.KlefkiA_3.geometry} material={materials['Material #23']} skeleton={nodes.KlefkiA_3.skeleton} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
        <skinnedMesh geometry={nodes.KlefkiB_1.geometry} material={materials['Material #21']} skeleton={nodes.KlefkiB_1.skeleton} />
        <skinnedMesh geometry={nodes.KlefkiB_2.geometry} material={materials['Material #22']} skeleton={nodes.KlefkiB_2.skeleton} />
        <skinnedMesh geometry={nodes.KlefkiB_3.geometry} material={materials['Material #23']} skeleton={nodes.KlefkiB_3.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/707.glb')
