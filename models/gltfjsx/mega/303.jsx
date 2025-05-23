/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/mega/303.glb -o models/gltfjsx/mega/303.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/mega/303.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.root} />
      <skinnedMesh geometry={nodes.kuchiito_mega_00_0_0_node.geometry} material={materials.body_mat} skeleton={nodes.kuchiito_mega_00_0_0_node.skeleton} rotation={[Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.kuchiito_mega_00_0_1_node.geometry} material={materials.body_mat} skeleton={nodes.kuchiito_mega_00_0_1_node.skeleton} rotation={[Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.kuchiito_mega_00_1_0_node.geometry} material={materials.eye_mat} skeleton={nodes.kuchiito_mega_00_1_0_node.skeleton} rotation={[Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.kuchiito_mega_00_2_0_node.geometry} material={materials.mouth_mat} skeleton={nodes.kuchiito_mega_00_2_0_node.skeleton} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/mega/303.glb')
