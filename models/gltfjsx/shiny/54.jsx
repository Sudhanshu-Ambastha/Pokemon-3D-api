/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/shiny/54.glb -o models/gltfjsx/shiny/54.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/54.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes['004_Hips']} />
      <primitive object={nodes['027_Spine']} />
      <group position={[0, 0.816, -0.006]} rotation={[0, 0, Math.PI / 2]} scale={2.54}>
        <skinnedMesh geometry={nodes.Psyduck_1.geometry} material={materials.Body01} skeleton={nodes.Psyduck_1.skeleton} />
        <skinnedMesh geometry={nodes.Psyduck_2.geometry} material={materials.Eye} skeleton={nodes.Psyduck_2.skeleton} />
        <skinnedMesh geometry={nodes.Psyduck_3.geometry} material={materials.LIris} skeleton={nodes.Psyduck_3.skeleton} />
        <skinnedMesh geometry={nodes.Psyduck_4.geometry} material={materials.LIris} skeleton={nodes.Psyduck_4.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/shiny/54.glb')
