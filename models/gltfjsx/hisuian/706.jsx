/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/hisuian/706.glb -o models/gltfjsx/hisuian/706.jsx 
Author: LunaEagle (https://sketchfab.com/LunaEagle)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/goodra-hisuian-84ec6f5c741d488f8ccd97195c5bda60
Title: Goodra Hisuian
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/hisuian/706.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_238" geometry={nodes.Object_238.geometry} material={materials['pm0706_00_41-BodyEnv']} skeleton={nodes.Object_238.skeleton} scale={0.5} />
        <skinnedMesh name="Object_239" geometry={nodes.Object_239.geometry} material={materials['pm0706_00_41-Mouth']} skeleton={nodes.Object_239.skeleton} scale={0.5} />
        <skinnedMesh name="Object_240" geometry={nodes.Object_240.geometry} material={materials['pm0706_00_41-LEye']} skeleton={nodes.Object_240.skeleton} scale={0.5} />
        <skinnedMesh name="Object_241" geometry={nodes.Object_241.geometry} material={materials['pm0706_00_41-Body']} skeleton={nodes.Object_241.skeleton} scale={0.5} />
        <skinnedMesh name="Object_242" geometry={nodes.Object_242.geometry} material={materials['pm0706_00_41-LEye']} skeleton={nodes.Object_242.skeleton} scale={0.5} />
        <skinnedMesh name="Object_244" geometry={nodes.Object_244.geometry} material={materials['pm0706_00_41-BodyEnv']} skeleton={nodes.Object_244.skeleton} scale={0.5} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/hisuian/706.glb')
