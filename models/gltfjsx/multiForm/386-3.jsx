/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/multiform/386-3.glb -o models/gltfjsx/multiform/386-3.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/multiForm/386-3.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.034}>
          <primitive object={nodes.pm0386_14_00_prefab} />
        </group>
        <skinnedMesh name="_000_pm0386_14_00_prefab" geometry={nodes._000_pm0386_14_00_prefab.geometry} material={materials.pm0386_14_00_BodyASpc} skeleton={nodes._000_pm0386_14_00_prefab.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.034} />
        <skinnedMesh name="_001_pm0386_14_00_prefab" geometry={nodes._001_pm0386_14_00_prefab.geometry} material={materials.pm0386_14_00_BodyBSpc00} skeleton={nodes._001_pm0386_14_00_prefab.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.034} />
        <skinnedMesh name="_002_pm0386_14_00_prefab" geometry={nodes._002_pm0386_14_00_prefab.geometry} material={materials.pm0386_14_00_Eye} skeleton={nodes._002_pm0386_14_00_prefab.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.034} />
        <skinnedMesh name="_003_pm0386_14_00_prefab" geometry={nodes._003_pm0386_14_00_prefab.geometry} material={materials.pm0386_14_00_BodyASpc} skeleton={nodes._003_pm0386_14_00_prefab.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.034} />
        <skinnedMesh name="_004_pm0386_14_00_prefab" geometry={nodes._004_pm0386_14_00_prefab.geometry} material={materials.pm0386_14_00_BodyCInc} skeleton={nodes._004_pm0386_14_00_prefab.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.034} />
        <skinnedMesh name="_005_pm0386_14_00_prefab" geometry={nodes._005_pm0386_14_00_prefab.geometry} material={materials.pm0386_14_00_BodyASpc} skeleton={nodes._005_pm0386_14_00_prefab.skeleton} rotation={[Math.PI / 2, 0, 0]} scale={0.034} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/multiForm/386-3.glb')
