/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/845.glb -o models/gltfjsx/regular/845.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/845.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_242" geometry={nodes.Object_242.geometry} material={materials['pm0845_11_00-BodyA00']} skeleton={nodes.Object_242.skeleton} scale={0.5} />
        <skinnedMesh name="Object_243" geometry={nodes.Object_243.geometry} material={materials['pm0845_11_00-BodyA00']} skeleton={nodes.Object_243.skeleton} scale={0.5} />
        <skinnedMesh name="Object_245" geometry={nodes.Object_245.geometry} material={materials['pm0845_11_00-BodyA00']} skeleton={nodes.Object_245.skeleton} scale={0.5} />
        <skinnedMesh name="Object_246" geometry={nodes.Object_246.geometry} material={materials['pm0845_11_00-BodyA00']} skeleton={nodes.Object_246.skeleton} scale={0.5} />
        <skinnedMesh name="Object_247" geometry={nodes.Object_247.geometry} material={materials['pm0845_11_00-BodyA00']} skeleton={nodes.Object_247.skeleton} scale={0.5} />
        <skinnedMesh name="Object_248" geometry={nodes.Object_248.geometry} material={materials['pm0845_11_00-Eye']} skeleton={nodes.Object_248.skeleton} scale={0.5} />
        <skinnedMesh name="Object_252" geometry={nodes.Object_252.geometry} material={materials['pm0845_11_00-BodyA00']} skeleton={nodes.Object_252.skeleton} scale={0.5} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/845.glb')
