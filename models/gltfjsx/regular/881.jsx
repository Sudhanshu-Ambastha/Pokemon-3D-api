/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/881.glb -o models/gltfjsx/regular/881.jsx 
Author: LunaEagle (https://sketchfab.com/LunaEagle)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/arctozolt-f449ceffa79f4890a4dcfffee6531b90
Title: Arctozolt
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/881.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_82" geometry={nodes.Object_82.geometry} material={materials['pm0881_00_00-BodyVco01']} skeleton={nodes.Object_82.skeleton} scale={0.5} />
        <skinnedMesh name="Object_84" geometry={nodes.Object_84.geometry} material={materials['pm0881_00_00-BodyVco01']} skeleton={nodes.Object_84.skeleton} scale={0.5} />
        <skinnedMesh name="Object_86" geometry={nodes.Object_86.geometry} material={materials['pm0881_00_00-BodyVco01']} skeleton={nodes.Object_86.skeleton} scale={0.5} />
        <skinnedMesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials['pm0881_00_00-BodyVco01']} skeleton={nodes.Object_87.skeleton} scale={0.5} />
        <skinnedMesh name="Object_88" geometry={nodes.Object_88.geometry} material={materials['pm0881_00_00-BodyVco01']} skeleton={nodes.Object_88.skeleton} scale={0.5} />
        <skinnedMesh name="Object_89" geometry={nodes.Object_89.geometry} material={materials['pm0881_00_00-Eye']} skeleton={nodes.Object_89.skeleton} scale={0.5} />
        <skinnedMesh name="Object_90" geometry={nodes.Object_90.geometry} material={materials['pm0881_00_00-BodyVco01']} skeleton={nodes.Object_90.skeleton} scale={0.5} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/881.glb')
